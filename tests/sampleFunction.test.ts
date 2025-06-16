// eslint-disable-next-line import/no-extraneous-dependencies
// @ts-expect-error vitest types are provided via tsconfig "types"
import { describe, it, expect } from 'vitest'
import { mockVoiceEntries } from '../src/lib/mockData'
import processEntries from '../src/lib/sampleFunction'

describe('processEntries', () => {
  // Tests tag counter
  it('counts reflection tag correctly', () => {
    const result = processEntries(mockVoiceEntries);
    expect(result.tagFrequencies.reflection).toBe(2);
  });
});

describe('correct input', () => {
  it('solution uses the right transcript', () => {
    const res = processEntries(mockVoiceEntries);
    const expectedEntryIDs = ['26', '95', '174', '186', '155', '2', '3', '4', '5', '6'];

    // Grabbing `transcript_user` from mock data
    const transcript_user = mockVoiceEntries
      .filter(e => expectedEntryIDs.includes(e.id))
      .map(e => e.transcript_user);

    // Grabbing `entry_text` from result
    const entry_text = res.entries.map(e => e.entry_text);

    expect(transcript_user).toEqual(expect.arrayContaining(entry_text));
  });
});

describe('describe entries', () => {
  it('classifies tasks properly', () => {
    const res = processEntries(mockVoiceEntries);
    const expectedEntryIDs = ['26', '95', '174', '186', '155', '2', '3', '4', '5', '6'];

    expect(res.entries.length).toBe(expectedEntryIDs.length);
    const mockIDs = res.entries.map(e => e.entry_id);
    expect(mockIDs).toEqual(expectedEntryIDs);
  });

  it('classifies generic journal entries properly', () => {
    const res = processEntries(mockVoiceEntries);
    /**
     * `processEntries` only returns the entries that were classified as tasks.
     * To further confirm this in conjunction with the other test, this
     * test will be testing if known journal entries are in the result. If no,
     * then this is a pass.
     */

    // All 15 Mock Entry IDs
    const mockIDs = mockVoiceEntries.map(e => e.id);

    // Known Journal Entry IDs from Mock Data
    const journalEntryIDs = ['1', '9', '12', '14', '17'];

    // Filter out the Jounral Entries
    const filtered = mockIDs.filter(id => !journalEntryIDs.includes(id));

    // Filtered should equal IDs from result
    expect(filtered.length).toBe(res.entries.map(e => e.entry_id).length);
    expect(res.entries.map(e => e.entry_id)).toEqual(expect.arrayContaining(filtered));
  });
});

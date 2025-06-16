import { VoiceEntry, ProcessedResult } from './types'

/**
 * [IDEA]
 * Use Natural Language Processing to distinguish between tasks and general jounral entries
 * Return entries that were determined to be tasks
 */
interface Entry {
  entry_id: string;
  entry_text: string;
  category: 'task' | 'journal';
}

interface ExtendedProcessedResult extends ProcessedResult {
  entries: Entry[];
}

/**
 * Regex for NLP
 * Captures [action] -> [time] and [time] -> [action]
 * Allows optional filler words
 */
const TASK = /(?:(?:(?:\b\w+\b\s+){0,7})?\b((need|don'?t forget|planning|time|intend|have) to|plan|intend on|buy|schedule|scheduled|call|text|email|visit|check on|send|should)\b(?:.*?\b(by|before|after|in|for|later)\b)?.*?\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|tonight|next week|weekend|next weekend|next month|weeks|months|july|work|birthday|later)\b|(?:(?:\b\w+\b\s+){0,2})?\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|tonight|next week|weekend|next weekend|next month|weeks|months|july|work|birthday|later)\b.*?\b(call|visit|check on|clean|text|buy|email|schedule|scheduled|talk to|send)\b)/i;

// Helper NLP function for finding statuses
function findStatus(transcript: string): 'task' | 'journal' {
  const lower = transcript.toLowerCase();
  if (TASK.test(lower)) return 'task';
  return 'journal'; // Fallback is generic journal entry
}

/**
 * processEntries
 * --------------
 * PURE function — no IO, no mutation, deterministic.
 */
export function processEntries(entries: VoiceEntry[]): ExtendedProcessedResult {
  const tagFrequencies: Record<string, number> = {};
  const processedEntries: Entry[] = [];

  for (const entry of entries) {
    for (const tag of entry.tags_user) {
      tagFrequencies[tag] = (tagFrequencies[tag] || 0) + 1;
    }

    // Using 'transcript_user' for cleaner input
    const transcript = entry.transcript_user.trim();
    const cat = findStatus(transcript);

    processedEntries.push({
      entry_id: entry.id,
      entry_text: transcript,
      category: cat,
    });
  }

  return {
    summary: `Analysed ${entries.length} entries`,
    tagFrequencies,
    entries: processedEntries.filter(entry => entry.category === 'task'), // returns only the entries marked as tasks
  }
}

export default processEntries 

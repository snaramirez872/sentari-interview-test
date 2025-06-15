/**
 * File was not originally provided
 * This file was written by the candidate, no extra dependencies need to be installed for this to work
 */
import fs from 'fs';
import path from 'path';
import { VoiceEntry } from './types';

const dat = path.resolve(__dirname, './Expanded_Diary_Entries');
const content = fs.readFileSync(dat, 'utf-8');

// Parse Headers
const [headerLine, ...lines] = content.split('\n').filter(Boolean);
const headers = headerLine.split(',').map(head => head.trim());

export const mockVoiceEntries: VoiceEntry[] = lines.map((line) => {
    const vals = line.split(',').map(val => val.trim().replace(/^"|"$/g, ''));

    const entry: any = {};
    headers.forEach((k, i) => {
        entry[k] = vals[i];
    });

    return {
        id: entry.id,
        user_id: entry.user_id,
        audio_url: entry.audio_url || null,
        transcript_raw: entry.transcript_raw,
        transcript_user: entry.transcript_user,
        language_detected: entry.language_detected,
        language_rendered: entry.language_rendered,
        tags_model: entry.tags_model ? JSON.parse(entry.tags_model) : [],
        tags_user: entry.tags_user ? JSON.parse(entry.tags_user) : [],
        category: entry.category || null,
        created_at: entry.created_at,
        updated_at: entry.updated_at,
        emotion_score_score: entry.emotion_score_score ? Number(entry.emotion_score_score) : null,
        embedding: entry.embedding ? JSON.parse(entry.embedding) : null,
    } as VoiceEntry;
});
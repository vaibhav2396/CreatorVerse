import { createClient } from '@supabase/supabase-js';

const URL = 'https://obquchrddoblnseiogxx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9icXVjaHJkZG9ibG5zZWlvZ3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NDQ2NTcsImV4cCI6MjAzODEyMDY1N30.SqUgm-lh172hICUHYpT5sHzRjODH9xOMaK8SRFhGh8I';

export const supabase = createClient(URL, API_KEY);
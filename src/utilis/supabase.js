import { createClient } from '@supabase/supabase-js';

const API_URL = "https://aahtyzecvqdnqvffqrfn.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHR5emVjdnFkbnF2ZmZxcmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzNDEzMjQsImV4cCI6MjAyMDkxNzMyNH0.ZnHSo2oTnIgclIUeyMHze617OBooUmBX4uXwUhneNxA"

const supabase = createClient(API_URL, API_KEY);


export default supabase;
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.supabaseUrl!
const supabaseAnonKey = process.env.supabaseAnonKey!

const supabase = createClient(supabaseUrl, supabaseAnonKey)
export async function GET() {
  const { data, error } = await supabase
    .from('counters')
    .select('count')
    .eq('name', 'main_counter')
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ count: data?.count ?? 0 })
}

export async function POST() {
  // Call the increment_counter RPC function you created in Supabase
  const { data, error } = await supabase.rpc('increment_counter', {
    counter_name: 'main_counter',
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ count: data })
}

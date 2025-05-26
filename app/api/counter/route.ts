import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'counter.json')

function ensureCounterFile() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }))
  }
}

export async function GET() {
  ensureCounterFile()
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return NextResponse.json({ count: data.count })
}

export async function POST() {
  ensureCounterFile()
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  data.count = (data.count || 0) + 1
  fs.writeFileSync(filePath, JSON.stringify(data))
  return NextResponse.json({ count: data.count })
}

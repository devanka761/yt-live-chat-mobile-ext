import fs from "fs"

interface IContent {
  matches: string[]
  js: string[]
}
interface IManifest {
  manifest_version: number
  author: "Devanka761"
  name: string
  version: string
  content_scripts: IContent[]
}

function createManifest(): void {
  const manifest: IManifest = {
    manifest_version: 3,
    name: "YouTube Live Stream Chat Kiwi",
    author: "Devanka761",
    version: "0.0.1",
    content_scripts: [
      {
        matches: ["http://studio.youtube.com/live_chat*"],
        js: ["content.js"]
      }
    ]
  }
  const distPath = "./dist"
  if (!fs.existsSync(distPath)) fs.mkdirSync(distPath)
  fs.writeFileSync(`${distPath}/manifest.json`, JSON.stringify(manifest, null, 2), "utf-8")
}

createManifest()

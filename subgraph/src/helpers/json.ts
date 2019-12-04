import { Bytes } from "@graphprotocol/graph-ts"

export function isJson(manifest: Bytes): boolean {
    let manifestString = manifest.toHexString()
    let first = manifestString.slice(0, 4)
    return first == '0x7b'
}

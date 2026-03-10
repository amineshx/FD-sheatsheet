import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function CodeBlock({ code }: { code: string }) {

    const [copied,setCopied] = useState(false)

    const copy = async () => {

        await navigator.clipboard.writeText(code)

        setCopied(true)

        setTimeout(()=>setCopied(false),1500)

    }

    return (

        <div className="relative">

            <button
                onClick={copy}
                className="absolute right-2 top-2 text-gray-400 hover:text-white transition"
            >
                {copied ? <Check size={16}/> : <Copy size={16}/>}
            </button>

            <pre className="bg-black rounded-lg p-4 text-sm overflow-x-auto">
                <code>{code}</code>
            </pre>

        </div>

    )
}
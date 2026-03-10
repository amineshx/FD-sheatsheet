import CodeBlock from "./CodeBlock"

export default function CheatItemCard({ item }: { item: any }) {

  return (
    <div id={item.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative">
      
    

      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
      <CodeBlock code={item.code} />

      <div className="flex gap-2 mt-4 flex-wrap">
        {item.tags.map((tag: string) => (
          <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
import CheatItemCard from "./CheatItemCard"

export default function CheatSection({ section }: { section: any }) {
    
    return (

        <section id={section.id} className="mb-16">

            <h2 className="text-2xl font-bold mb-6">
                {section.title}
            </h2>

            <div className="grid gap-6">
                {section.items.map((item: any) => (
                    <CheatItemCard key={item.id} item={item} />
                ))}
            </div>

        </section>

    )
}
export default function TitleAndParagraph({title, paragraph, h1Color, pColor}) {
    return (
        <>
            <h1 className={"text-4xl font-bold tracking-tight sm:text-6xl " + h1Color}>
                {title}
            </h1>
            <p className={"mt-6 text-lg leading-8 " + pColor}>
                {paragraph}
            </p>
        </>
    )}
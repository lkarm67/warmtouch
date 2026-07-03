export default function PortfolioCard({ title, description, image }: { title: string; description: string; image: string }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

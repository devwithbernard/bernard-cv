import "./skill.scss"
export const Skill = ({skill}) =>{
    return (
        <a href="/skills" className="link">
            <img className="img" src={skill.img} alt={skill.title}/>
            <section className="section">
                <h5>{skill.title}</h5>
                <p>{skill.description}</p>
                <div className="tags">
                    {skill.tags.map((tag,index) => (<span key={index}>{'#'+tag}</span>))}
                </div>
            </section>
        </a>
    )
}
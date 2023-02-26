import './index.scss'

interface PortifolioItemProps {
    data: {
        title: string;
        description: string;
        sorce_code: string;
        live_preview?: string;
        image: string;
    }
}

const PortifolioItemComponent = ({ 
    data: {
        title ,
        description, 
        sorce_code, 
        live_preview, 
        image
    } } : PortifolioItemProps) => {
        
    return (
        <article className='portifolio__item'>
            <div className='content-1 container'>
                <h2 className='portifolio__item--title'>{title}</h2>
                <p className='portifolio__item--description'>{description}</p>
                <div className='portifolio__item--link'>
                    <a href={sorce_code} target='_blank' className='portifolio__item--source'>Codigo fonte</a>
                    {live_preview ? ( 
                        <a href={live_preview} target='_blank' className='portifolio__item--preview'>Link de visualização</a> 
                    ) : ''}
                </div>
            </div>
            <div className='content-2 container'>
                <div className='portifolio__item--imagem'>
                    <img src={image} alt={`${title} imagem`} />
                </div>
            </div>
        </article>
    )
}

export default PortifolioItemComponent 
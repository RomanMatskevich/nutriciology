import { useParams } from 'react-router-dom';
import { IconArrowBarRight } from '@tabler/icons-react'
import useFetching from '../hooks/useFetching';
import './../App.css'
import CirclePoints from '../components/services/circlePoints';
import { Text } from '../types';
import SentencesList from '../components/services/sentencesList';
import { splitSentenceToParagraphs } from '../utils';
interface FetchDataService {
    title: string;
    subTitle: string;
    description: string;
    price: number;
    hint: string | null;
    PointsAfterServiceLeftCircle: Text[] | null;
    PointsAfterServiceRightCircle: Text[] | null;
    descriptionTags: {
        id: number
        title: string;
        tags: Text[]
    };
    secondHint: string | null;
    mustBeReadTags: {
        id: number
        title: string;
        tags: Text[]
    } | null;
}

export default function Service() {
    const { id } = useParams()
    const queryUrl = process.env.REACT_APP_BACKEND_URL + '/api/services/' + id + '?populate[PointsAfterServiceLeftCircle]=*&populate[PointsAfterServiceRightCircle]=*&populate[descriptionTags][populate]=*&populate[mustBeReadTags][populate]=*'
    const { data, loading, error } = useFetching(queryUrl)
    if (loading) return <div>loading</div>
    if (error) return <div>error</div>
    const {
        title,
        subTitle,
        description,
        price,
        hint,
        PointsAfterServiceLeftCircle,
        PointsAfterServiceRightCircle,
        descriptionTags,
        secondHint,
        mustBeReadTags
    } = data.data.attributes as FetchDataService
    return (
        <div className="text-yellow">
            <div className='pt-4 px-6 pb-12 text-green'>
                <IconArrowBarRight className="font-bold md:h-6 md:w-6 rotate-180" stroke={1} />
                <div className="w-max mt-10">
                    <h5 className="font-swift text-3xl md:text-4xl">{title}</h5>
                    <p className="w-max mx-auto text-sm md:text-lg font-light italic">{subTitle}</p>
                </div>
                <div className='space-y-7 text-base font-light pt-10'>
                    {
                        splitSentenceToParagraphs(description)
                        .map(paragraph => 
                            <p key = {paragraph}>
                                {paragraph}
                            </p>
                        )
                    }
                    <div className='flex justify-between items-start'>
                        <span>вартість</span>
                        <span className='font-normal'>{price}</span>
                    </div>
                    {hint && <p className='my-10'>{hint}</p>}
                </div>
                
            </div>
            <div className="bg-green rounded-[20px]">
                <p className='px-6 md:px-16 pb-12 pt-16 md:pt-24 md:pb-20'>Що отримуєте від консультації:</p>
                {PointsAfterServiceLeftCircle && <CirclePoints tags={PointsAfterServiceLeftCircle} align = {true}/>}
                {PointsAfterServiceRightCircle && <CirclePoints tags={PointsAfterServiceLeftCircle} align = {false}/>}
            </div>
            <SentencesList tags = {descriptionTags.tags} title = {descriptionTags.title} backgroundStyles='text-green'/>
            {secondHint && <p className='my-10'>{secondHint}</p>}
            {
                mustBeReadTags && <SentencesList tags = {mustBeReadTags.tags} title = {mustBeReadTags.title} backgroundStyles='text-yellow bg-green rounded-lg '/>
            }
            <button 
                className="flex border text-xs md:text-base rounded-lg font-normal mb-10 border-green px-5 py-2 md:px-5 md:py-3 lg:px-6 lg:py-[14px] gap-2.5 md:gap-4 uppercase w-max mx-auto items-center mt-10 md:mt-14 lg:mt-24 text-green"
            >
                на головну
                <IconArrowBarRight className="font-bold md:h-6 md:w-6" stroke = {1}/>
            </button>
        </div>
    )
}
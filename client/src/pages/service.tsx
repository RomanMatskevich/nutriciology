import { useParams } from 'react-router-dom';
import { IconArrowBarRight } from '@tabler/icons-react'
import useFetching from '../hooks/useFetching';
import './../App.css'
import CirclePoints from '../components/services/circlePoints';
import { Text } from '../types';

interface FetchDataService {
    title: string;
    subTItle: string;
    subscription: string;
    price: number;
    hint: string | null;
    PointsAfterServiceLeftCircle: Text[] | null;
    PointsAfterServiceRightCircle : Text[] | null;
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
    const {data , loading, error} = useFetching(queryUrl)
    if(loading) return <div>loading</div> 
    if(error) return <div>error</div>
    const {
        title, 
        subTItle, 
        subscription, 
        price, 
        hint, 
        PointsAfterServiceLeftCircle, 
        PointsAfterServiceRightCircle, 
        descriptionTags, 
        secondHint, 
        mustBeReadTags
    } = data.data.attributes as FetchDataService
    return (
        <div className="">
            <div className='pt-4 px-6 pb-12'>
                    <IconArrowBarRight className="font-bold md:h-6 md:w-6 rotate-180" stroke = {1}/>
                </div>
            <div className="bg-green rounded-[20px]">
                <CirclePoints tags = {PointsAfterServiceLeftCircle} />
            </div>
            
        </div>
    )
}
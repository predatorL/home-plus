import useSWR from "swr";
import {  getRecipeDetail } from '../../apis/recipes';

function Page() {
    const { data, error, isLoading } = useSWR("/api/user/123", () => getRecipeDetail(1))
    const { attributes = {} } = data?.data || {};
    console.log(2222, attributes, data);
    

    return (
        <div className='recipe-detail'>
            <div>
                {attributes.name}
            </div>
            <div>
                <div className="title"></div>
                {attributes.description}
            </div>
            <div>
              
                <div className="title">
                    用料 
                </div>
                <pre>
                    {attributes.ingredients}
                </pre>
            </div>
            <div>
                <div className="title">
                    {attributes.name}的做法  
                </div>
                <pre>
                    {attributes.steps}
                </pre>
            </div>
            <div>
                <div className="title">小贴士</div>
                {attributes.tip}
            </div>
        </div>
    )
}

export default Page

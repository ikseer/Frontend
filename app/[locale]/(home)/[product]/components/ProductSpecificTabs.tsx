import Tabs from '@/components/Tabs/Tabs'
import Description from "./Description"
import Review from "./Review"

export default function SpecificProductTab() {
    return (
        <Tabs
            componentsList={[<Description key="component-1" />, <Review key="component-2" />]}
            componentNames={["Description", "Review"]}
            containerClassName = ""
        />  
    )
}
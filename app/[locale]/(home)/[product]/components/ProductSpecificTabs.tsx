import Tabs from '@/components/Tabs/Tabs'
import Description from "./Description"
import Review from "./Review"

export default function SpecificProductTab() {
    return (
        <Tabs
            componentOne={< Description />}
            componentTwo={< Review />}
            componentNames={["Description", "Review"]}
            containerClassName = ""
        />  

    )

}
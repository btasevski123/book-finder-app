import {Link} from "react-router-dom"


export const About = () => {
    return(<>
        <Link to={"/"} className="button text-center ">Go back</Link>
        <div className="text-center">If listofbooks.json file contained more information about the book it would be displayed here.</div>
    </>
    )
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNavbar = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl">All Caterogy {category.length}</h2>
            <div className="">
                {
                    category.map(singlecategory => <Link className="block mb-5" key={singlecategory.id} singlecategory={singlecategory}>{singlecategory.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;
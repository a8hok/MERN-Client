import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllBlogbydata } from '../../../Store/Slice/getAllBlogData';
import { getBlogbyFiltereddata } from '../../../Store/Slice/getFIlteredBlogsData';
import { getBlogbyDomain } from '../../../Store/Slice/getBlogbyDomain';

import { BlogSelectAction } from '../../../Store/Slice/individualBlogData';
import { deleteSelectedBlog } from '../../../Store/Slice/deleteBlogs';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ManageBlogs from '../../manageBlogs/manageBlogs';

import "./Blogs.css";

const Blogs = ({allow}) => {

    const dispatch = useDispatch();

    const [selectedDomain, setSelectedDomain] = useState("");

    const [selectedSubDomain, setSelectedSubDomain] = useState("");

    const [domain, setDomain] = useState([]);

    const [subDomain, setSubDomain] = useState([]);

    const [showBlog, setShowBlog] = useState([]);

    const [selected, setSelected] = useState({});

    const [viewStatus, setViewStatus] = useState(0);

    const navigate = useNavigate();

    const [bothOptions, setBothOptions] = useState({
        Domain: "",
        subDomain: ""
    });

    const allSelector = (name, value) => {
        setBothOptions({...bothOptions, [name]: value})
    };

    const deleteBlog = (e) => {
        const confirmMessage = window.confirm("Do you want to delete this blog")
        if(confirmMessage === true){
            dispatch(deleteSelectedBlog(e))
            // console.log(e)
            // setTimeout(() => {
            //     window.location.reload(false)
            // }, "2000")
        }
    }

    const editBlogData = (e) => {
        console.log(e)
        setSelected(e)
        setViewStatus(1)
    }

    const viewchangeFunction = () => {
        setViewStatus(0)
    }

    const {alldataBlog} = useSelector((state) => state.allBlog);

    const {selectedBlog} = useSelector((state) => state.SelectedBlog);

    const {selectedDomainBlog} = useSelector((state) => state.blogByDomain);

    useEffect(() => {
        dispatch(getAllBlogbydata())
    }, []);

    useEffect(() => {
        if(alldataBlog?.length > 0){
            const forDomain = alldataBlog.map((i) => i.Domain)
            const uniqueDomain = [...new Set(forDomain)]
            setDomain(uniqueDomain)
            const forSubDomain = (alldataBlog.map((i) => i.subDomain))
            const uniqueSubDomain = [...new Set (forSubDomain)]
            setSubDomain(uniqueSubDomain)
        }
    }, [alldataBlog, selectedDomain, selectedSubDomain]);

    useEffect(() => {
        if(selectedDomain === "" && selectedSubDomain === ""){
            dispatch(getAllBlogbydata())
        } else if (selectedDomain !== "" && selectedSubDomain !== ""){
            dispatch(getBlogbyFiltereddata(bothOptions))
        } else if (selectedDomain !== "" && selectedSubDomain === ""){
            dispatch(getBlogbyDomain(selectedDomain))
        }
    }, [selectedDomain, selectedSubDomain]);

    useEffect(() => {
        if(selectedSubDomain === "" && selectedDomain === ""){
            console.log("no selection is alos working fine")
            setShowBlog(alldataBlog)
        }else if (selectedDomain !== "" && selectedSubDomain !== ""){
            setShowBlog(selectedBlog)
        }else if (selectedDomain !== "" && selectedSubDomain === ""){
            console.log("the single selection is working")
            setShowBlog(selectedDomainBlog)
        }
    }, [selectedDomain, selectedSubDomain, alldataBlog, selectedBlog, selectedDomainBlog]);

    const settingDomain = (e) => {
        setSelectedDomain(e.target.value);
        setSelectedSubDomain("")
        allSelector(e.target.name, e.target.value)
    };

    const settingSubDomain = (e) => {
        console.log(e.target.value)
        setSelectedSubDomain(e.target.value)
        allSelector(e.target.name, e.target.value)
    };

    const onBlogClick = (e) => {
        // console.log(e)
        dispatch(BlogSelectAction.selectingBlogData(e))
        navigate("/individualblog")
    };

    return (
        <>
                {viewStatus === 0 ? <div>
                    <div className="selecting-preferences-blogs">
                        <div className="guide-selection">
                            Filter
                        </div>
                        <select name="Domain" className="guide-selector" onChange={settingDomain}>
                        <option value="">select Domain</option>
                            {domain.map((i, index) => {
                            return (
                                <option key={index} value={i}>{i}</option>
                            )
                            })}
                        </select>
                        <select name="subDomain" className="guide-selector guide-Selector_Last" onChange={settingSubDomain}>
                        <option value="">select Sub-Domain</option>
                            {subDomain.map((i, index) => {
                            return (
                                <option key={index} value={i}>{i}</option>
                            )
                            })}
                        </select>
                    </div>
                    {showBlog.length > 0 ? 
                    <div className="all_blog-posts-container">
                        {showBlog.map((i, index) => {
                         return (
                            // <div key={index} className="blog_main_card-posts">
                            //     <div className="blog_filter-Holder">
                            //         <h2>{i.Domain}</h2>
                            //         <h2>{i.subDomain}</h2>
                            //     </div>
                            //     <div className="blog_contents">
                            //         <div className="blog_contents-top">
                            //             <div className="blog_contents-squares">
                            //                 <h3>{i.title1}</h3>
                            //                 <p>{i.body1}</p>
                            //             </div>
                            //             <div className="blog_contents-squares">
                            //                 <h3>{i.title2}</h3>
                            //                 <p>{i.body2}</p>
                            //             </div>
                            //         </div>
                            //         <div className="blog_contents-mid">
                            //             <div className="blog_contents-squares">
                            //                 <h3>{i.title3}</h3>
                            //                 <p>{i.body3}</p>
                            //             </div>
                            //             <div className="blog_contents-squares">
                            //                 <h3>{i.title4}</h3>
                            //                 <p>{i.body4}</p>
                            //             </div>
                            //         </div>
                            //         <div className="blog_contents-bot">
                            //             <div className="blog_contents-squares">
                            //                 <h3>{i.title5}</h3>
                            //                 <p>{i.body5}</p>
                            //             </div>
                            //             <div className="blog_contents-squares">
                            //                 <h3>{i.title6}</h3>
                            //                 <p>{i.body6}</p>
                            //             </div>
                            //             <div className="blog_contents-squares">
                            //                 <h3>{i.title7}</h3>
                            //                 <p>{i.body7}</p>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                            <div key={index} className="blog_contents-squares">
                                {/* <div className="blog_image-banner"></div> */}
                                <div className="blog_card-contents">
                                    <h2>{i.Domain}</h2>
                                    {/* <h2>{i.subDomain}</h2> */}
                                    <h3>{i.title1}</h3>
                                    <p>{i?.body1?.length > 80 ? i?.body1.slice(0, 80) : i?.body1}</p>
                                </div>
                                {allow ?<div className="blog_bottom-navigationBox">
                                    <EditIcon onClick={() => editBlogData(i)} className="blog-bottom_icons"/>
                                    <DeleteIcon onClick={() => deleteBlog(i?._id)} className="blog-bottom_icons"/>
                                    <span onClick={() => onBlogClick(i)}>{`Read More >>`}</span>
                                </div>:null}
                                {!allow ? <span onClick={() => onBlogClick(i)}>{`Read More >>`}</span>:null}
                            </div>
                         )
                        })}
                    </div>:<div>No Blog currently available</div>}
                </div>: <ManageBlogs blogData={selected} screenChange={viewchangeFunction}/>}
        </>
    )
}

export default Blogs;

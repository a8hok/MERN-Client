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
            const filteredData = alldataBlog.filter((i) => i.Domain === selectedDomain);
            const forSubDomain = filteredData.map((i) => i.subDomain);
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
            setShowBlog(alldataBlog)
        }else if (selectedDomain !== "" && selectedSubDomain !== ""){
            setShowBlog(selectedBlog)
        }else if (selectedDomain !== "" && selectedSubDomain === ""){
            setShowBlog(selectedDomainBlog)
        }
    }, [selectedDomain, selectedSubDomain, alldataBlog, selectedBlog, selectedDomainBlog]);

    const settingDomain = (e) => {
        setSelectedSubDomain("")
        setSelectedDomain(e.target.value)
        allSelector(e.target.name, e.target.value)
    };

    const settingSubDomain = (e) => {
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
                    <div className={bothOptions.Domain ? "selecting-preferences-blogs" : "selecting-preferences-first-blogs"}>
                        {/* <div className="guide-selection">
                            Filter
                        </div> */}
                        <select name="Domain" className="guide-Selector_First" onChange={settingDomain}>
                        <option className="guide-Selector_First_option" style={{padding: "1.5em"}} value="">select Domain</option>
                            {domain.map((i, index) => {
                            return (
                                <option className="guide-Selector_First_option" style={{padding: "1.5em"}} key={index} value={i}>{i}</option>
                            )
                            })}
                        </select>
                        {bothOptions.Domain && <select name="subDomain" className="guide-Selector_First" onChange={settingSubDomain}>
                        <option className="guide-Selector_First_option" style={{padding: "1.5em"}} value="">select Sub-Domain</option>
                            {subDomain.map((i, index) => {
                            return (
                                <option className="guide-Selector_First_option" style={{padding: "1.5em"}} key={index} value={i}>{i}</option>
                            )
                            })}
                        </select>}
                    </div>
                    {showBlog.length > 0 ? 
                    <div className="all_blog-posts-container">
                        {showBlog.map((i, index) => {
                         return (
                            <div key={index} className="blog_contents-squares">
                                <div className="blog_card-contents">
                                    <h2>{i.Domain}</h2>
                                    <h3>{i.title1}</h3>
                                    <p>{i?.body1?.length > 300 ? `${i?.body1.slice(0, 300)}...` : i?.body1}</p>
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
                    </div>:<div className="no_blog-message">No Blog currently available</div>}
                </div>: <ManageBlogs blogData={selected} screenChange={viewchangeFunction}/>}
        </>
    )
}

export default Blogs;

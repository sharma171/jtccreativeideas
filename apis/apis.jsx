
import instance from "./commonapi";

let choosePoint = "choosePoint"
let cources = "cources"
let courseSections = "courseSections"
let company = "company"
let testimonials = "testimonials"
let footer = "footer"
let blog = "blog"
let codes = "code"
let about = "about"
let navbar = "navbar"
let tutorial = "tutorial"
let compiler = "compiler"
let projectComponent = "projectComponent"


// All Lists of Blogs 
export const blogs = async (id) => {
  try {
    const { data } = await instance.get(blog);
    return data;

  } catch (err) {
    return err
  }
};

// All Language of Projects
export const projectLanguages = async (id) => {
  try {
    const { data } = await instance.get(projectComponent);
    return data;

  } catch (err) {
    return err
  }
};

// All Language of Projects
export const projectList = async (id) => {
  try {
    const value = JSON.stringify({ id })
    const { data } = await instance.patch(projectComponent, value);
    return data;
  } catch (err) {
    return err
  }
};

// All Language of Projects
export const allProject = async (arrayOfTech,arrayOfCategory) => {
  try {
    console.log(arrayOfTech,arrayOfCategory);
    // const value = JSON.stringify({ arrayOfTech,arrayOfCategory})
    const { data } = await instance.post(projectComponent);
    return data;
  } catch (err) {
    return err
  }
};

// Get a single blog
export const singleBlog = async (id) => {
  try {
    const { data } = await instance.get(id);
    return data;

  } catch (err) {
    return err
  }
};

// All choosing Points
export const allChoosingPoint = async () => {
  try {
    const { data } = await instance.get(choosePoint);
    return data;

  } catch (err) {
    return err
  }
};

// Footer Data aPi
export const footerData = async () => {
  try {
    const { data } = await instance.get(footer);
    return data;

  } catch (err) {
    return err
  }
};



// Testomainals Data 
export const alltestimonials = async () => {
  try {
    const { data } = await instance.get(testimonials);
    return data;

  } catch (err) {
    return err
  }
};

// Lis of cources
export const homeCourses = async () => {
  try {
    const { data } = await instance.get(cources);
    return data;

  } catch (err) {
    return err
  }
};




// Lis of comapnies
export const homeCompany = async () => {
  try {
    const { data } = await instance.get(company);
    return data;

  } catch (err) {
    return err
  }
};

// About Us Point
export const aboutUS = async () => {
  try {
    const { data } = await instance.get(about);
    return data;

  } catch (err) {
    return err
  }
};



//  all vaccieny avialble list of roles
export const allRoles = async (field) => {
  try {
    const { data } = await instance.get(courseSections);
    return data;
  } catch (err) {
    return err
  }
};


// all courses types
export const allCourceTypes = async () => {
  try {
    const { data } = await instance.patch(cources);

    return data;

  } catch (err) {
    return err
  }
};

// get static pages
export const termsAndCondition = async (id) => {
  try {
    const { data } = await instance.patch(id);
    return data;
  } catch (err) {
    return err
  }
};


// get all course list
export const courcesList = async (id) => {
  try {
    const value = JSON.stringify({ id })
    const { data } = await instance.put(cources, value);
    return data;
  } catch (err) {
    return err
  }
};

// course basic details
export const courseData = async (name) => {
  try {
    const value = JSON.stringify({ name })
    const { data } = await instance.post(cources, value);
    return data;
  } catch (err) {
    return err
  }
};

// all choosing point
export const coursePoint = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.put(courseSections, value);
    return data;
  } catch (err) {
    return err
  }
};

// course video point
export const courceViodePoint = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.patch(about, value);
    return data;
  } catch (err) {
    return err
  }
};

// all batches list
export const allBatches = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.post(courseSections, value);
    return data;
  } catch (err) {
    return err
  }
};

// single course categories
export const courseCatgories = async (id) => {
  try {
    const { data } = await instance.post(id);
    return data;
  } catch (err) {
    return err
  }
};

// course chapter
export const courseChapter = async (id) => {
  try {
    const value = JSON.stringify({ id })
    const { data } = await instance.patch(courseSections, value);
    return data;
  } catch (err) {
    return err
  }
};

// course faqs
export const courseFaqs = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.post(about, value);
    return data;
  } catch (err) {
    return err
  }
};

// navbar link api
export const allNavbarLinks = async () => {
  try {
    const { data } = await instance.get(navbar);
    return data;
  } catch (err) {
    return err
  }
};


// list of types tutorial
export const tutorialType = async () => {
  try {
    const { data } = await instance.get(tutorial);
    return data;
  } catch (err) {
    return err
  }
};

// tuturial couses
export const tutorialCourse = async (type) => {
  try {
    const value = JSON.stringify({ type })
    const { data } = await instance.post(tutorial, value);
    return data;
  } catch (err) {
    return err
  }
};


// tutorial chapters
export const tutorialChapter = async (course) => {
  try {
    const value = JSON.stringify({ course })
    const { data } = await instance.put(tutorial, value);
    return data;
  } catch (err) {
    return err
  }
};

// tutorial topics
export const tutorialTopic = async (topic) => {
  try {
    const value = JSON.stringify({ topic })
    const { data } = await instance.patch(tutorial, value);
    return data;
  } catch (err) {
    return err
  }
};



export const sendCode = async(chapter, topic, code) =>{
  try{
    const value = JSON.stringify({ chapter, topic, code })
    const { data } = await instance.post(codes, value);
    return data;
  } catch (err) {
    return err
  
  }
}

export const executejava = async(initalcode) =>{
  try{
    const value = JSON.stringify({initalcode })
    const { data } = await instance.patch(codes, value);
    return data;
  } catch (err) {
    return err
  
  }
}

export const executepython = async(initalcode) =>{
  try{
    const value = JSON.stringify({initalcode })
    const { data } = await instance.put(codes, value);
    return data;
  } catch (err) {
    return err
  
  }
}

export const executecpp = async(initalcode) =>{
  try{
    const value = JSON.stringify({initalcode })
    const { data } = await instance.post(compiler, value);
    return data;
  } catch (err) {
    return err
  
  }
}

export const executec = async(initalcode) =>{
  try{
    const value = JSON.stringify({initalcode })
    const { data } = await instance.put(compiler, value);
    return data;
  } catch (err) {
    return err
  
  }
}
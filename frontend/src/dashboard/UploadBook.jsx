import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react';
const UploadBook = () => {
  const bookCategories=[
    "Fiction",
    "Non - Fiction",
    "Progamming",
    "Religion",
    "Hinduism",
    "Spirituality",
    "Mythology",
    "Indian",
    "Fantasy",
    "Literature",
    "Historical",
    "Autobiography",
    "Bibliography",
  ]
  const [selectedBookCategory,setselectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) =>{
    setselectedBookCategory(event.target.value);
  }
  // handle book submition 
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;
    
    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL
    }
    // send data to db
    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).
    then(data => {
      alert("book uplaoded successfully !!!")
    })
  }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>  Uplaod A book</h2>
        <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          {/* first row  */}
          <div className='flex gap-8'>
            {/* book title  */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book title" />
              </div>
              <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
            </div>
            {/* author name  */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
              </div>
              <TextInput id="authorName" name="Author Name" type="text" placeholder="Author Name" required />
            </div>
          </div>
          {/* second row  */}
          <div className='flex gap-8'>
            {/* imageURL  */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Book Image Url" />
              </div>
              <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book image Url" required />
            </div>
            {/* category  */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>
              <Select id="inputState" name = "categoryName" className='w-full rounded' value={selectedBookCategory}
               onChange={handleChangeSelectedValue}
              >
                {
                  bookCategories.map((option) =>
                    <option key={option} value={option}> {option} </option>
                  )
                }
              </Select>
            </div>
          </div>
          {/* bookDescription  */}
          <div>
            <div className="mb-2 block">
                <Label htmlFor="bookDescription" value="Book Description" />
            </div>
                <Textarea id="bookDescription"
                className='w-full'
                name="bookDescription" 
                type="text" placeholder="Write Your Book Description Here..." required row={5}/>
          </div>
          {/* bookPDF link  */}
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="bookPdfURL" value="Book PDF URL" />
              </div>
              <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="Book PDF URL Name" required />
          </div>
          <Button type="submit" className='mt-5'>Uplaod Book</Button>
        </form>
    </div>
  )
}

export default UploadBook
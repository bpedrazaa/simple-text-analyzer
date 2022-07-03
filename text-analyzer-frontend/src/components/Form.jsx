import { useState } from 'react';

const Form = ( {handleData} ) => {
  const [image, setImage] = useState('');
  const [uploadFile, setUploadFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please upload an image');
      return;
    }

    const data = new FormData();
    data.append('file', uploadFile.files[0]);

    await fetch('/', {
      method: 'POST',
      body: data
    }).then((res) => {
      alert("Image uploaded")
      return res.json()
    }).then((data) => {
      handleData(data);
    })

  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Render component
  return (
    <div>
      <div className='alert alert-warning' role='alert'>
        IMAGE SELECTION
      </div>

      <div className='card bg-dark text-white m-2 mb-3 mx-auto' style={{width: 1000 }}>
        <div className='m-5'>
          <form onSubmit={onSubmit}>
            <div className='form-group m-1 mb-4'>
              <input
                type='file'
                className='form-control-file'
                id='image'
                onChange={onImageChange}
                ref={(ref) => {setUploadFile(ref)}}
              ></input>
              <img src={image} width='400' height='400' />
            </div>
            <button className='btn btn-primary m-1 btn-lg'>
              Upload Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

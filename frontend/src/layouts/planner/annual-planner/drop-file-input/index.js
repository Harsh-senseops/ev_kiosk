import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as XLSX from "xlsx";

import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';
import Grid from "@mui/material/Grid";

import { makeStyles } from '@mui/styles';

import './drop-file-input.css';

import ImageConfig from '../config';
import uploadImg from "../../../../assets/cloud-upload-regular-240.png"


const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
    const [excelFile, setExcelFile] = useState(null);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        const fileTypesAllowed = [
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.oasis.opendocument.spreadsheet",
          ];

        if (newFile) {
            const selectedFileType = newFile.type;
            if (fileTypesAllowed.includes(selectedFileType)) {
              const updatedList = [newFile];
              setFileList(updatedList);
            //   const {onFileChange} = props
            //   onFileChange(updatedList)
              props.onFileChange(updatedList);
              const reader = new FileReader();
              reader.readAsArrayBuffer(newFile);
              reader.onload = (event) => setExcelFile(event.target.result);
            } else {
              console.log("Please select excel sheet")
            }
          } else {
            setExcelFile(null);
        }
    }

    const fileRemove = () => {
        const updatedList = [];
        setFileList(updatedList);
        // const {onFileChange} = props
        // onFileChange(updatedList)
        props.onFileChange(updatedList);
    }

    console.log("Excel file", excelFile)

    const handleFileSubmit = (e) => {
        e.preventDefault()
        console.log("File submit clicked")

        const workBook = XLSX.read(excelFile, { type: "buffer", cellDates: true });
    const workSheetName = workBook.SheetNames[0];
    const workSheet = workBook.Sheets[workSheetName];
    const dataXLSX = XLSX.utils.sheet_to_json(workSheet, {
      blankrows: false,
      defval: "",
    });
      const exceldataa = dataXLSX
      console.log("Excel dataa", exceldataa)
      setFileList([])
        // props.onFileChange([]);
    }

    console.log("File list", fileList)

    return (
        <>
        <Grid mb={6} mt={2}>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <MDTypography variant="h5" fontWeight="medium">Ready to upload</MDTypography>
                        <form onSubmit={handleFileSubmit}>
                        {
                            fileList.map((item, index) => (
                                <div className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig.default} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <MDTypography variant="button" fontWeight="regular">{item.name}</MDTypography>
                                        {/* <p>{item.size}B</p> */}
                                    </div>
                                    {/* <button type='button' className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</button> */}
                                </div>
                            ))
                        }
                        <MDButton color='light' onClick={() => fileRemove()}>
                            Cancel
                        </MDButton>
                        <MDButton color='info' type='submit' onClick={(e) => handleFileSubmit(e)}>
                            Upload
                        </MDButton>
                        </form>
                    </div>
                ) : (
                    <div style={{
                        position: 'relative',
                        width: '30rem',
                        height: '200px',
                        border: '2px dashed #277BC0',
                        borderRadius: '20px',             
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',             
                        backgroundColor: '#EEF1FF'
                   }}
                       ref={wrapperRef}
                       className="drop-file-input"
                       onDragEnter={onDragEnter}
                       onDragLeave={onDragLeave}
                       onDrop={onDrop}
                   >
                       <div className="drop-file-input__label">
                           <img src={uploadImg} alt="" />
                           <MDTypography variant="h5" fontWeight="regular" color="secondary">Drag & Drop Master Part List file here</MDTypography>
                       </div>
                       <input type="file" value="" onChange={onFileDrop}/>
                   </div>
                )
            }
            </Grid>
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;

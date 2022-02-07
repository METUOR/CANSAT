import React from 'react'
import Webcam from 'react-webcam'
import './cam.css'


function Cam() {
	const webcamRef = React.useRef(null);
	const mediaRecorderRef = React.useRef(null);
	const [capturing, setCapturing] = React.useState(false);
	const [recordedChunks, setRecordedChunks] = React.useState([]);

	const handleStartCaptureClick = React.useCallback(() => {
		setCapturing(true);
		console.log("started");
		mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
			mimeType: "video/webm"
		});
		mediaRecorderRef.current.addEventListener(
			"dataavailable",
			handleDataAvailable
		);
		mediaRecorderRef.current.start();
	}, [webcamRef, setCapturing, mediaRecorderRef]);

	const handleDataAvailable = React.useCallback(
		({ data }) => {
			if (data.size > 0) {
				setRecordedChunks((prev) => prev.concat(data));
			}
		},
		[setRecordedChunks]
	);

	const handleStopCaptureClick = React.useCallback(() => {
		mediaRecorderRef.current.stop();
		setCapturing(false);
	}, [mediaRecorderRef, webcamRef, setCapturing]);

	const handleDownload = React.useCallback(() => {
		if (recordedChunks.length) {
			const blob = new Blob(recordedChunks, {
				type: "video/webm"
			});
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			document.body.appendChild(a);
			a.style = "display: none";
			a.href = url;
			a.download = "video.webm";
			a.click();
			window.URL.revokeObjectURL(url);
			setRecordedChunks([]);
		}
	}, [recordedChunks]);

	return (

		<div className='cam'>
			 <div className="cam__input"> 
			
			{capturing ? (
				<button className='start-stop-button' onClick={handleStopCaptureClick}>Stop Recording</button>
			) : (
				<button className='start-stop-button' onClick={handleStartCaptureClick}>Start Recording</button>
			)}
			{recordedChunks.length > 0 && (
				<button className='start-stop-button' onClick={handleDownload}>Download</button>
			)}
		</div>
		<div className="cam__container">
		<Webcam audio={false} width={400} height={250} ref={webcamRef} />
		</div>
		
		</div>
		

	);
}

export default Cam;
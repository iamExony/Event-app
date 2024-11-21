const ProgressBars = ({ currentStep }) => {
    const progressBars = [1, 2, 3, 4].map((step) => {
        const filled = step <= currentStep ? "filled" : "";
        return <div key={step} className={`progress-bar ${filled}`}></div>;
      });

    return (        
        <div className="progress-bars flex gap-4 w-[70%]">{progressBars}</div>
     );
}
 
export default ProgressBars;
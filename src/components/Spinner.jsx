const Spinner = () => {
    return (
      <div className="flex justify-center items-center">
        <div
          className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-600"
          style={{ borderTopColor: 'transparent' }}
        ></div>
      </div>
    );
  };
  
  export default Spinner;
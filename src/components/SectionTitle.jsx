
const SectionTitle = ({sectionHeader,sectionSubHeader}) => {
    return (
        <div className='text-center my-16'>
            <h1 className='text-3xl '>{sectionHeader}</h1>
            <div className="divider w-3/12 mx-auto"></div>
            <p className='text-xl '>{sectionSubHeader}</p>
        </div>
    );
};

export default SectionTitle;
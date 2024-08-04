interface ICard{
    name:string;
    address:string;

}

const Card = (props: ICard)=>{
    return(
        <>
        <div>
            <h1>{props.name}</h1>
            <p>{props.address}</p>
        </div>
        </>
    );
};

export default Card;
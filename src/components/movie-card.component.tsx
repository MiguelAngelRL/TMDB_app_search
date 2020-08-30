import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Info from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

interface Props {
    movie: any;
    handleMoreInfo: (movieId: number)=>void;
}

export const MovieCardComponent = (props: Props) => {
    const {movie, handleMoreInfo} = props;
    const d = new Date(movie.release_date);
    return(
        <Card elevation={3} style={{ width:'250px', height:'400px', margin:'1%'}}>
            <CardHeader
                avatar={<Avatar style={{backgroundColor:'mediumseagreen'}} aria-label="Movie rating">{movie.vote_average}</Avatar>}
                title={movie.title}
                subheader={`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`}
                style={{ display:'flex', justifyContent:'center', alignItems:'flex-start', height: '15%'}}
            />
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', height: '75%'}}>
                {(movie.poster_path && 
                    <img style={{objectFit:'contain', paddingBottom:'1%'}} alt={movie.title} 
                         src={`${process.env.REACT_APP_IMAGES_BASE_URL}${process.env.REACT_APP_CARD_IMAGE_SIZE}${movie.poster_path}`}/>) ||
                    <p style={{textAlign:'center', color:'crimson'}}>No image available</p>}    
                <Button variant="contained" color="primary" size="small" startIcon={<Info />} onClick={()=>handleMoreInfo(movie.id)} 
                    aria-label="More info">More Info</Button>
            </div>
        </Card>
    );
};



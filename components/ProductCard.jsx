import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
    let productImage = props.productImage;
    let productImageAlt = props.productImageAlt;
    let productTitle = props.productTitle;
    let productSubtitle = props.productSubtitle;
    let productView = props.productView;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={ productImageAlt }
        height="140"
        image={ productImage }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { productTitle }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { productSubtitle }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={ productView }>View</Button>
      </CardActions>
    </Card>
  );
}
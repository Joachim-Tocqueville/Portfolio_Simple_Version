import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function Card_projet() {
    return (
        <Card className="grid h-70 w-50 rounded-4xl! cursor-pointer">
            <CardMedia component="img" image="" alt="Image projet" className="h-55 bg-[#EDF2F4] text-black text-[1.1rem]! content-center"></CardMedia>
            <Button className="h-15 rounded-none! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[1rem]! normal-case! font-['PlusJakartaSans-Regular']!">Titre du projet</Button>
        </Card>
    )
}

export default Card_projet;
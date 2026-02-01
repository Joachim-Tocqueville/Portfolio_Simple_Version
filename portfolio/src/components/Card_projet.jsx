import { Card, CardMedia, Button } from '@mui/material';

function Card_projet({ dataProjets, onClick, context = 'projets' }) {
    const contextStyle = dataProjets.style?.[context] || {};
    const bgColor = contextStyle.backgroundColor || 'white';
    const fitValue = contextStyle.imageFit || 'cover';

    return (
        <Card className="grid h-70 w-50 rounded-4xl! cursor-pointer!" onClick={onClick} style={{ background: bgColor }}>
            <div className="h-55 w-full flex items-center justify-center overflow-hidden">
                <CardMedia component="img" image={dataProjets.image} alt={dataProjets.altImage} className={`w-full h-full text-black text-[1.1rem]! content-center`} style={{ objectFit: fitValue }} />
            </div>
            <Button className="h-15 rounded-none! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[1rem]! normal-case! font-['PlusJakartaSans-Regular']! pointer-events-none">
                {dataProjets.titre}
            </Button>
        </Card>
    )
}

export default Card_projet;
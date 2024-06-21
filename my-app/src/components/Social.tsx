import { ReactElement } from 'react';
import { Button } from './ui/button';

type socialType = {
    id: string,
    icon: ReactElement,
};
type SocialProps = {
    socialData: socialType[]
};

const Social: React.FC<SocialProps> = ({ socialData }) => {
    return (
        <div className='flex gap-4 justify-center'>
            {socialData.map(social => (
            <Button variant={'outline'} size={'icon'} key={social.id}>
                {social.icon}
            </Button>
            ))}
        </div>
    );
};

export default Social;
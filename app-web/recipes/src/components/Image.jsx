import { getImageField } from '../utils';

export default function Iamge ({data}) {
    const imgObj = getImageField(data);
    const url = imgObj?.url ? `http://localhost:1337${imgObj?.url}` : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
  return (
    <img alt="example" src={url} />
  )
}


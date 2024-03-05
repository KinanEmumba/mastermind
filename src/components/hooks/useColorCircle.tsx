import { useState } from 'react'
import { ColorType } from 'src/shared-types';

const useColorCircle = () => {
  const [clickedColor, setClickedColor] = useState<string | ColorType>('');
  console.log('IN HOOK clickedColor', clickedColor);
  return {clickedColor, setClickedColor} as const;
}

export default useColorCircle;
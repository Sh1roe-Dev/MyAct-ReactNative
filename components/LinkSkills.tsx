import { Text, View } from 'react-native';

interface LinkSkillsProps {
    id: number| null;
    title: string | null;
    color: string | null;
}

const LinkSkills = ({id, title, color}: LinkSkillsProps) => {
  return (
    <View className={`m-2 p-2 border rounded flex-col gap-2 w-28 flex justify-center items-center hover:bg-gray-500 transition-colors duration-200 ease-in-out ${color}`} key={id}>
      <Text className='font-bold text-lg'>{title}</Text>
    </View>
  )
}

export default LinkSkills
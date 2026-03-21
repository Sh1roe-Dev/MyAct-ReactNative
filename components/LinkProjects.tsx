import { Text, View } from 'react-native';

interface LinkProjectsProps {
    id: number | null;
    title: string | null;
    description: string | null;   
}
const LinkProjects = ({id, title, description}: LinkProjectsProps) => {
  return (
    <View className='m-2 p-2 border rounded flex-col gap-2 hover:bg-gray-300' key={id}>
      <Text className='font-bold text-lg'>{title}</Text>
      <Text className='pl-2'>{description}</Text>
    </View>
  )
}

export default LinkProjects
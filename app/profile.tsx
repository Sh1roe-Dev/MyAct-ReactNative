import { View, Text } from 'react-native'
import LinkButton from '@/components/LinkButton';
import LinkSkills from '@/components/LinkSkills';

const Profile = () => {
  
  const skills = [
    {
      id: 1,
      title: 'JavaScript',
      color: 'bg-yellow-400'
    },
    {
      id: 2,
      title: 'React',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Node.js',
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Typescript',
      color: 'bg-cyan-500'
    },
    {
      id: 5,
      title: 'HTML',
      color: 'bg-red-500'
    }
  ]
  return (
    <View className='flex-1 justify-center items-center gap-4 px-10'>
      <View>
        <Text className='text-3xl font-semibold'>My Skills</Text>
      </View>
      <View className='w-full px-4 mt-4 flex-row flex-wrap justify-center gap-4 border rounded-xl py-4'>
        {
          skills.map((skill) => {
            return (
              <LinkSkills key={skill.id} id={skill.id} title={skill.title} color={skill.color} />
            )
          })
        }
      </View>
      <View>
        <LinkButton
          title='Go Back'
          url='/'
          style='bg-gray-500'
        />
      </View>
    </View>
  )
}

export default Profile
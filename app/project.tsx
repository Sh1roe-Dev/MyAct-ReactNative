import LinkButton from "@/components/LinkButton";
import LinkProjects from "@/components/LinkProjects";
import { Text, View } from "react-native";

const Project = () => {

  const myProjects = [
    {
      id: 1,
      title: 'Cabangan High School Management System',
      description: 'The Cabangan High School Management System is a centralized digital platform designed to automate school operations and replace manual paperwork.'
    },
    {
      id: 2,
      title: 'Daz Store Management System',
      description: 'The Daz Store Management System can refer to two very different things depending on your industry: a retail management software for physical/online shops, or the specialized content management within Daz 3D Studio.'
    },
    {
      id: 3,
      title: 'LGU Management System',
      description: 'An LGU (Local Government Unit) Management System is a comprehensive e-governance platform designed to digitize public services. It moves a municipality or city away from "pila" (queues) and toward a "Smart City" model by integrating all department data into one secure network.'
    }
  ]

  return (
    <View className="flex-1 justify-center items-center px-4 gap-4">
      <Text className="text-3xl font-semibold">My Projects</Text>
      <View className="px-3 border rounded-xl py-3">
        {
          myProjects.map((project) => {
            return (
              <LinkProjects
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
              />
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
  );
};

export default Project;

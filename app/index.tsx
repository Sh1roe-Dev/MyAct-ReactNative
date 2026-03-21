import LinkButton from "@/components/LinkButton";
import { Image, Text, View } from "react-native";
import Man from "../assets/images/man.png";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <View>
        <Image source={Man} className="w-48 h-48 rounded-full"/>
      </View>
      <View className="flex-col items-center justify-center gap-3">
        <View className="flex-col items-center justify-center">
          <Text className="text-lg font-semibold">Ryan Jake G. Daz</Text>
          <Text className="text-sm text-gray-500">Full Stack Developer</Text>
        </View>
        <View className="flex-col items-center justify-center">
          <Text className="text-sm">Age: 29</Text>
          <Text className="text-sm">
            Address: J. Sanez St., It-ba Manito Albay
          </Text>
        </View>
        <View className="flex-row justify-center gap-3">
          <LinkButton
            title="View My Projects"
            url="project"
            style="bg-black"
          />
          <LinkButton
            title="View My Skills"
            url="profile"
            style="bg-blue-500"
          />
        </View>
      </View>
    </View>
  );
}

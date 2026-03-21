import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

interface LinkButtonProps {
  title: string | null;
  url: string | null;
  style: string | null;
}

const LinkButton = ({ title, url, style }: LinkButtonProps) => {
  const router = useRouter();
  return (
    <Pressable
      className={`px-4 py-2 rounded-full ${style}`}
      onPress={() => router.push(url as any)}
    >
      <Text className="text-white">{title}</Text>
    </Pressable>
  );
};

export default LinkButton;

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TextContent({
    enContent,
    trContent,
}) {
    return (
        <div className="min-h-screen grid place-items-center">
            <Tabs defaultValue="en" className="w-[min(1000px,95%)]">
                <TabsList>
                    <TabsTrigger value="en">EN</TabsTrigger>
                    <TabsTrigger value="tr">TR</TabsTrigger>
                </TabsList>
                <TabsContent value="en">{enContent}</TabsContent>
                <TabsContent value="tr">{trContent}</TabsContent>
            </Tabs>
        </div>
    );
}

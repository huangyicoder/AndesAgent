import { ChatOpenAI } from "@langchain/openai";
/**
 * Phase 0 Spike: DeepAgents 基础对话 + 流式响应 Demo
 *
 * 运行: npx tsx apps/server/src/spike/demo-basic-chat.ts
 *
 * 需要设置环境变量:
 *   LLM_API_KEY
 *   LLM_BASE_URL (可选, 默认 https://open.bigmodel.cn/api/paas/v4/)
 */
import { createDeepAgent } from "deepagents";

async function main() {
	console.log("=== DeepAgents 基础对话 Demo ===\n");

	const model = new ChatOpenAI({
		configuration: {
			baseURL: process.env.LLM_BASE_URL ?? "https://open.bigmodel.cn/api/paas/v4/",
		},
		apiKey: process.env.LLM_API_KEY ?? "",
		model: "glm-4.7",
		temperature: 0.7,
	});

	// @ts-ignore DeepAgent type instantiation is excessively deep
	const agent = createDeepAgent({
		model,
		systemPrompt: "你是一个有帮助的AI助手。请用中文简洁回答。",
		tools: [],
	});

	// 测试流式输出
	console.log("--- 流式输出测试 ---");
	// @ts-ignore streamMode is a LangGraph option
	const stream = await agent.stream(
		{ messages: [{ role: "user", content: "用一句话介绍什么是 LangGraph" }] },
		{ streamMode: "messages" },
	);

	for await (const [message, _metadata] of stream) {
		if (message.content && typeof message.content === "string") {
			process.stdout.write(message.content);
		}
	}
	console.log("\n");

	// 测试 invoke
	console.log("--- invoke 测试 ---");
	const result = await agent.invoke({
		messages: [{ role: "user", content: "1+1=?" }],
	});

	const lastMsg = result.messages[result.messages.length - 1];
	console.log(
		"回复:",
		typeof lastMsg.content === "string" ? lastMsg.content : JSON.stringify(lastMsg.content),
	);

	console.log("\n=== Demo 完成 ===");
}

main().catch(console.error);

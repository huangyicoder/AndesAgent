/**
 * Phase 0 Spike: MCP 服务器连接 Demo
 *
 * 运行: npx tsx apps/server/src/spike/demo-mcp.ts
 *
 * 验证 @langchain/mcp-adapters 连接 MCP 服务器并获取工具
 */
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { createDeepAgent } from "deepagents";

async function main() {
	console.log("=== MCP 服务器连接 Demo ===\n");

	// 创建 MCP 客户端，连接 filesystem MCP server
	const client = new MultiServerMCPClient({
		// 使用 filesystem server 作为测试
		filesystem: {
			transport: "stdio" as const,
			command: "npx",
			args: ["-y", "@anthropic-ai/mcp-filesystem-server", "/tmp"],
		},
	});

	console.log("正在连接 MCP 服务器...");
	const tools = await client.getTools();
	console.log(`获取到 ${tools.length} 个工具:`);

	for (const tool of tools) {
		console.log(`  - ${tool.name}: ${tool.description?.slice(0, 80) ?? "无描述"}`);
	}

	// 将 MCP tools 注入 DeepAgent
	console.log("\n正在创建带 MCP 工具的 Agent...");
	const agent = createDeepAgent({
		model: "anthropic:claude-sonnet-4-6",
		systemPrompt: "你是一个有文件系统访问能力的AI助手。",
		tools,
	});

	console.log("Agent 创建成功，可用工具已注入。");

	// 测试调用
	const result = await agent.invoke({
		messages: [{ role: "user", content: "列出 /tmp 目录下的文件" }],
	});

	const lastMsg = result.messages[result.messages.length - 1];
	console.log(
		"\n回复:",
		typeof lastMsg.content === "string" ? lastMsg.content : JSON.stringify(lastMsg.content),
	);

	// 清理连接
	await client.close();
	console.log("\n=== Demo 完成 ===");
}

main().catch(console.error);

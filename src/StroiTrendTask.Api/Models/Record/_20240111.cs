using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models.Record;

public class _20240111
{
    [JsonPropertyName("agents_chatting_duration")]
    public int AgentsChattingDuration { get; set; }

    [JsonPropertyName("count")] public int Count { get; set; }

    [JsonPropertyName("duration")] public int Duration { get; set; }
}
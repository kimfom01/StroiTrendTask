using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class Duration : BaseModel
{
    [JsonPropertyName("records")] public Dictionary<string, DurationData> Records { get; set; }
}

public class DurationData
{
    [JsonPropertyName("agents_chatting_duration")]
    public int AgentsChattingDuration { get; set; }

    [JsonPropertyName("count")] public int Count { get; set; }

    [JsonPropertyName("duration")] public int Duration { get; set; }
}
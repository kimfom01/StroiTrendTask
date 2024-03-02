using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class ResponseTime : BaseModel
{
    [JsonPropertyName("records")] public Dictionary<string, ResponseTimeData> Records { get; set; }
}

public class ResponseTimeData
{
    [JsonPropertyName("count")] public int Count { get; set; }

    [JsonPropertyName("response_time")] public double ResponseTime { get; set; }
}
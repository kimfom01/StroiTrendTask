using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class CountData
{
   [JsonPropertyName("total")] public int Total { get; set; }
}